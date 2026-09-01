__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 34
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 35,
                "end": 42
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 42
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 42
          }
        ],
        "start": 13,
        "end": 44
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 44
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 52
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 61
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 64
              },
              "optional": false,
              "computed": false,
              "start": 59,
              "end": 64
            },
            "typeArguments": null,
            "arguments": [],
            "start": 55,
            "end": 66
          },
          "definite": false,
          "start": 49,
          "end": 66
        }
      ],
      "declare": false,
      "start": 45,
      "end": 67
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 80
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 102
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 103,
                "end": 110
              },
              "abstract": false,
              "declare": false,
              "start": 94,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 87,
            "end": 110
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 120
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 129
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 123,
                  "end": 131
                },
                "definite": false,
                "start": 119,
                "end": 131
              }
            ],
            "declare": false,
            "start": 115,
            "end": 132
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 151
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 145,
                  "end": 153
                },
                "definite": false,
                "start": 141,
                "end": 153
              }
            ],
            "declare": false,
            "start": 137,
            "end": 154
          }
        ],
        "start": 81,
        "end": 156
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 156
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 165
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 174
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 177
              },
              "optional": false,
              "computed": false,
              "start": 172,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [],
            "start": 168,
            "end": 179
          },
          "definite": false,
          "start": 161,
          "end": 179
        }
      ],
      "declare": false,
      "start": 157,
      "end": 180
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 194
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 216
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 217,
                "end": 224
              },
              "abstract": false,
              "declare": false,
              "start": 208,
              "end": 224
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 201,
            "end": 224
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 243
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 246,
                    "end": 248
                  },
                  "definite": false,
                  "start": 240,
                  "end": 248
                }
              ],
              "declare": false,
              "start": 236,
              "end": 249
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 229,
            "end": 249
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
                  "start": 258,
                  "end": 259
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 268
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 262,
                  "end": 270
                },
                "definite": false,
                "start": 258,
                "end": 270
              }
            ],
            "declare": false,
            "start": 254,
            "end": 271
          }
        ],
        "start": 195,
        "end": 273
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 182,
      "end": 273
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 282
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 291
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 294
              },
              "optional": false,
              "computed": false,
              "start": 289,
              "end": 294
            },
            "typeArguments": null,
            "arguments": [],
            "start": 285,
            "end": 296
          },
          "definite": false,
          "start": 278,
          "end": 296
        }
      ],
      "declare": false,
      "start": 274,
      "end": 297
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 310
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 332
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 333,
                "end": 340
              },
              "abstract": false,
              "declare": false,
              "start": 324,
              "end": 340
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 317,
            "end": 340
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 350
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 359
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 353,
                  "end": 361
                },
                "definite": false,
                "start": 349,
                "end": 361
              }
            ],
            "declare": false,
            "start": 345,
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 372
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 378
                },
                "definite": false,
                "start": 371,
                "end": 378
              }
            ],
            "declare": false,
            "start": 367,
            "end": 379
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 389
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 398
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 392,
                  "end": 400
                },
                "definite": false,
                "start": 388,
                "end": 400
              }
            ],
            "declare": false,
            "start": 384,
            "end": 401
          }
        ],
        "start": 311,
        "end": 403
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 298,
      "end": 403
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 412
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 421
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 424
              },
              "optional": false,
              "computed": false,
              "start": 419,
              "end": 424
            },
            "typeArguments": null,
            "arguments": [],
            "start": 415,
            "end": 426
          },
          "definite": false,
          "start": 408,
          "end": 426
        }
      ],
      "declare": false,
      "start": 404,
      "end": 427
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 436
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 445
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 448
              },
              "optional": false,
              "computed": false,
              "start": 443,
              "end": 448
            },
            "typeArguments": null,
            "arguments": [],
            "start": 439,
            "end": 450
          },
          "definite": false,
          "start": 432,
          "end": 450
        }
      ],
      "declare": false,
      "start": 428,
      "end": 451
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 451
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 68,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 87,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "var",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 175,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 182,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 201,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 208,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 229,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "new",
    "start": 262,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 285,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 298,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 317,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 324,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 353,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
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
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
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
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 422,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 428,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 439,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 446,
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
    "value": ";",
    "start": 450,
    "end": 451
  }
]
```

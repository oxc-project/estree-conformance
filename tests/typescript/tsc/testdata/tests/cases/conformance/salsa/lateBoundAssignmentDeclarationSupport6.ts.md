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
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 35
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 44
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 38,
            "end": 46
          },
          "definite": false,
          "start": 31,
          "end": 46
        }
      ],
      "declare": false,
      "start": 25,
      "end": 47
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
            "name": "_str",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 58
          },
          "init": {
            "type": "Literal",
            "value": "my-fake-sym",
            "raw": "\"my-fake-sym\"",
            "start": 61,
            "end": 74
          },
          "definite": false,
          "start": 54,
          "end": 74
        }
      ],
      "declare": false,
      "start": 48,
      "end": 75
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 90,
        "end": 93
      },
      "expression": false,
      "start": 77,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 105
            },
            "optional": false,
            "computed": false,
            "start": 94,
            "end": 105
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defsAClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 116
          },
          "optional": false,
          "computed": false,
          "start": 94,
          "end": 116
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 119,
          "end": 123
        },
        "start": 94,
        "end": 123
      },
      "directive": null,
      "start": 94,
      "end": 124
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 146
          },
          "optional": false,
          "computed": false,
          "start": 125,
          "end": 146
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 158
            },
            "optional": false,
            "computed": false,
            "start": 147,
            "end": 158
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 164
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 172
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 174,
                  "end": 178
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 167,
                "end": 178
              }
            ],
            "start": 166,
            "end": 179
          }
        ],
        "optional": false,
        "start": 125,
        "end": 180
      },
      "directive": null,
      "start": 125,
      "end": 181
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 182,
          "end": 203
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 215
            },
            "optional": false,
            "computed": false,
            "start": 204,
            "end": 215
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 221
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 229
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 231,
                  "end": 235
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 224,
                "end": 235
              }
            ],
            "start": 223,
            "end": 236
          }
        ],
        "optional": false,
        "start": 182,
        "end": 237
      },
      "directive": null,
      "start": 182,
      "end": 238
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
            "name": "inst",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "typeArguments": null,
            "arguments": [],
            "start": 253,
            "end": 260
          },
          "definite": false,
          "start": 245,
          "end": 260
        }
      ],
      "declare": false,
      "start": 239,
      "end": 261
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
            "name": "_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 270
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 277
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "_str",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 282
            },
            "optional": false,
            "computed": true,
            "start": 273,
            "end": 283
          },
          "definite": false,
          "start": 268,
          "end": 283
        }
      ],
      "declare": false,
      "start": 262,
      "end": 284
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
            "name": "_z",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 293
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 300
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "_sym",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 305
            },
            "optional": false,
            "computed": true,
            "start": 296,
            "end": 306
          },
          "definite": false,
          "start": 291,
          "end": 306
        }
      ],
      "declare": false,
      "start": 285,
      "end": 307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 314
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 322
            },
            "optional": false,
            "computed": false,
            "start": 308,
            "end": 322
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 324
          },
          "optional": false,
          "computed": false,
          "start": 308,
          "end": 324
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 328
        },
        "start": 308,
        "end": 328
      },
      "directive": null,
      "start": 308,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 336
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 344
            },
            "optional": false,
            "computed": false,
            "start": 330,
            "end": 344
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 346
          },
          "optional": false,
          "computed": false,
          "start": 330,
          "end": 346
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "_sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 349,
          "end": 353
        },
        "start": 330,
        "end": 353
      },
      "directive": null,
      "start": 330,
      "end": 354
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 25,
  "end": 354
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
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
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "_str",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "String",
    "value": "\"my-fake-sym\"",
    "start": 61,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Identifier",
    "value": "F",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 96,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "defsAClass",
    "start": 106,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 132,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 149,
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
    "value": "_str",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 189,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 206,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 239,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 262,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "_y",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "_str",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "_z",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 301,
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
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 315,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 337,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "type": "Identifier",
    "value": "_sym",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./lateBoundAssignmentDeclarationSupport6.js",
                "raw": "\"./lateBoundAssignmentDeclarationSupport6.js\"",
                "start": 18,
                "end": 63
              }
            ],
            "optional": false,
            "start": 10,
            "end": 64
          },
          "definite": false,
          "start": 6,
          "end": 64
        }
      ],
      "declare": false,
      "start": 0,
      "end": 65
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
            "name": "inst",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 76
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "optional": false,
              "computed": false,
              "start": 84,
              "end": 87
            },
            "typeArguments": null,
            "arguments": [],
            "start": 80,
            "end": 89
          },
          "definite": false,
          "start": 72,
          "end": 89
        }
      ],
      "declare": false,
      "start": 66,
      "end": 90
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 105
            },
            "property": {
              "type": "Literal",
              "value": "my-fake-sym",
              "raw": "\"my-fake-sym\"",
              "start": 106,
              "end": 119
            },
            "optional": false,
            "computed": true,
            "start": 101,
            "end": 120
          },
          "definite": false,
          "start": 97,
          "end": 120
        }
      ],
      "declare": false,
      "start": 91,
      "end": 121
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 136
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "optional": false,
              "computed": false,
              "start": 137,
              "end": 140
            },
            "optional": false,
            "computed": true,
            "start": 132,
            "end": 141
          },
          "definite": false,
          "start": 128,
          "end": 141
        }
      ],
      "declare": false,
      "start": 122,
      "end": 142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 142
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
    "value": "x",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"./lateBoundAssignmentDeclarationSupport6.js\"",
    "start": 18,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 66,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 80,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"my-fake-sym\"",
    "start": 106,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  }
]
```

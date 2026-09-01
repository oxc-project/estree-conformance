__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "start": 31,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 32
        }
      ],
      "declare": false,
      "start": 27,
      "end": 33
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
            "start": 88,
            "end": 89
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 89
        }
      ],
      "declare": false,
      "start": 84,
      "end": 90
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
            "start": 147,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 147,
          "end": 150
        }
      ],
      "declare": true,
      "start": 135,
      "end": 151
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 191
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 193
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "directive": null,
            "start": 197,
            "end": 198
          }
        ],
        "start": 195,
        "end": 200
      },
      "expression": false,
      "start": 178,
      "end": 200
    },
    {
      "type": "EmptyStatement",
      "start": 200,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 223
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 225
          }
        ],
        "optional": false,
        "start": 219,
        "end": 226
      },
      "directive": null,
      "start": 219,
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 266
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 269,
            "end": 270
          },
          "definite": false,
          "start": 263,
          "end": 270
        }
      ],
      "declare": false,
      "start": 259,
      "end": 271
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
            "name": "bar1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 294,
                "end": 297
              },
              "start": 292,
              "end": 297
            },
            "start": 288,
            "end": 297
          },
          "init": null,
          "definite": false,
          "start": 288,
          "end": 297
        }
      ],
      "declare": false,
      "start": 284,
      "end": 298
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
            "name": "bar2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 327,
                "end": 330
              },
              "start": 325,
              "end": 330
            },
            "start": 321,
            "end": 330
          },
          "init": null,
          "definite": false,
          "start": 321,
          "end": 330
        }
      ],
      "declare": true,
      "start": 309,
      "end": 331
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
                "type": "TSAnyKeyword",
                "start": 341,
                "end": 344
              },
              "start": 339,
              "end": 344
            },
            "start": 337,
            "end": 344
          },
          "init": null,
          "definite": false,
          "start": 337,
          "end": 344
        }
      ],
      "declare": false,
      "start": 333,
      "end": 345
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
            "start": 350,
            "end": 352
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 361
            },
            "typeArguments": null,
            "arguments": [],
            "start": 355,
            "end": 361
          },
          "definite": false,
          "start": 350,
          "end": 361
        }
      ],
      "declare": false,
      "start": 346,
      "end": 362
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "declare",
    "start": 135,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 143,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 178,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Keyword",
    "value": "var",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 309,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 333,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 346,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  }
]
```

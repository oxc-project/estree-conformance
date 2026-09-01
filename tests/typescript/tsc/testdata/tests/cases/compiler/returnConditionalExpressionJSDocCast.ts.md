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
            "name": "sources",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 123
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 133
            },
            "typeArguments": null,
            "arguments": [],
            "start": 126,
            "end": 135
          },
          "definite": false,
          "start": 116,
          "end": 135
        }
      ],
      "declare": false,
      "start": 110,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "source",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 251
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 256
          },
          "right": {
            "type": "Literal",
            "value": "javascript",
            "raw": "\"javascript\"",
            "start": 259,
            "end": 271
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 271
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 322
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sources",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 344
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 348
                  },
                  "optional": false,
                  "computed": false,
                  "start": 337,
                  "end": 348
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 353
                  }
                ],
                "optional": false,
                "start": 337,
                "end": 354
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sources",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 376
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 380
                  },
                  "optional": false,
                  "computed": false,
                  "start": 369,
                  "end": 380
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "some other thing",
                    "raw": "\"some other thing\"",
                    "start": 381,
                    "end": 399
                  }
                ],
                "optional": false,
                "start": 369,
                "end": 400
              },
              "start": 318,
              "end": 400
            },
            "start": 279,
            "end": 407
          }
        ],
        "start": 273,
        "end": 409
      },
      "expression": false,
      "start": 236,
      "end": 409
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 409
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "sources",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 236,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "String",
    "value": "\"javascript\"",
    "start": 259,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "sources",
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
    "value": "get",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "sources",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "String",
    "value": "\"some other thing\"",
    "start": 381,
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
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  }
]
```

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
            "start": 312,
            "end": 313
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 316,
            "end": 317
          },
          "definite": false,
          "start": 312,
          "end": 317
        }
      ],
      "declare": false,
      "start": 308,
      "end": 318
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 324
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 329,
          "end": 330
        },
        "start": 323,
        "end": 330
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 342
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "#1: var\\nx\\n=\\n1\\n; x === 1. Actual: ",
                    "raw": "'#1: var\\\\nx\\\\n=\\\\n1\\\\n; x === 1. Actual: '",
                    "start": 343,
                    "end": 386
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 391
                  },
                  "start": 343,
                  "end": 392
                }
              ],
              "optional": false,
              "start": 336,
              "end": 393
            },
            "directive": null,
            "start": 336,
            "end": 394
          }
        ],
        "start": 332,
        "end": 396
      },
      "alternate": null,
      "start": 319,
      "end": 396
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 308,
  "end": 397
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 325,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "$ERROR",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "String",
    "value": "'#1: var\\\\nx\\\\n=\\\\n1\\\\n; x === 1. Actual: '",
    "start": 343,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  }
]
```

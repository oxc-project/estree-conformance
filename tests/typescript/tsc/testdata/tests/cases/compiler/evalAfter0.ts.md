__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1,
              "end": 2
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "eval",
              "optional": false,
              "typeAnnotation": null,
              "start": 3,
              "end": 7
            }
          ],
          "start": 1,
          "end": 7
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 9,
            "end": 13
          }
        ],
        "optional": false,
        "start": 0,
        "end": 14
      },
      "directive": null,
      "start": 0,
      "end": 15
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
            "name": "eva",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 63
        }
      ],
      "declare": true,
      "start": 48,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 66,
              "end": 67
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "eva",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 71
            }
          ],
          "start": 66,
          "end": 71
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 73,
            "end": 77
          }
        ],
        "optional": false,
        "start": 65,
        "end": 78
      },
      "directive": null,
      "start": 65,
      "end": 79
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 0,
    "end": 1
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "eval",
    "start": 3,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8,
    "end": 9
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 48,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "eva",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "eva",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  }
]
```

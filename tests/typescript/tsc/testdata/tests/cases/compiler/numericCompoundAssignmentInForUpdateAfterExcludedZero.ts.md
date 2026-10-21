__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "shift",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bitmap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 23,
              "end": 29
            },
            "start": 21,
            "end": 29
          },
          "start": 15,
          "end": 29
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 51
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 54,
                    "end": 55
                  },
                  "definite": false,
                  "start": 46,
                  "end": 55
                }
              ],
              "declare": false,
              "start": 42,
              "end": 55
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bitmap",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 63
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 68,
                "end": 69
              },
              "start": 57,
              "end": 69
            },
            "update": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 76
                  },
                  "start": 71,
                  "end": 78
                },
                {
                  "type": "AssignmentExpression",
                  "operator": ">>>=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bitmap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 86
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 92,
                    "end": 93
                  },
                  "start": 80,
                  "end": 93
                }
              ],
              "start": 71,
              "end": 93
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 95,
              "end": 97
            },
            "start": 37,
            "end": 97
          }
        ],
        "start": 31,
        "end": 99
      },
      "expression": false,
      "start": 0,
      "end": 99
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 99
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "shift",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "bitmap",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "for",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "bitmap",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 64,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "bitmap",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">>>=",
    "start": 87,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  }
]
```

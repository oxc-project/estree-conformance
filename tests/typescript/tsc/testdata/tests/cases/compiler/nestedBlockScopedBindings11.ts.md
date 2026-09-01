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
            "start": 4,
            "end": 5
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 5
        }
      ],
      "declare": false,
      "start": 0,
      "end": 6
    },
    {
      "type": "BlockStatement",
      "body": [
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
                "start": 17,
                "end": 18
              },
              "init": null,
              "definite": false,
              "start": 17,
              "end": 18
            }
          ],
          "declare": false,
          "start": 13,
          "end": 19
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "id": null,
            "generator": false,
            "start": 24,
            "end": 31
          },
          "directive": null,
          "start": 24,
          "end": 32
        }
      ],
      "start": 7,
      "end": 34
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
            "start": 40,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 41
        }
      ],
      "declare": false,
      "start": 36,
      "end": 42
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 51,
        "end": 52
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 65,
            "end": 66
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 81
                  },
                  "init": null,
                  "definite": false,
                  "start": 80,
                  "end": 81
                }
              ],
              "declare": false,
              "start": 76,
              "end": 82
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 98
                },
                "id": null,
                "generator": false,
                "start": 91,
                "end": 98
              },
              "directive": null,
              "start": 91,
              "end": 99
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 108,
              "end": 114
            }
          ],
          "start": 60,
          "end": 114
        }
      ],
      "start": 43,
      "end": 116
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 116
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 27,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 60,
    "end": 64
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 94,
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
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  }
]
```

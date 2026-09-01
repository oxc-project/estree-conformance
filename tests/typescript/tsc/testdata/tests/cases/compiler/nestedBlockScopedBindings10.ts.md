__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
                "start": 10,
                "end": 11
              },
              "init": null,
              "definite": false,
              "start": 10,
              "end": 11
            }
          ],
          "declare": false,
          "start": 6,
          "end": 12
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 21,
              "end": 22
            },
            "start": 17,
            "end": 22
          },
          "directive": null,
          "start": 17,
          "end": 23
        }
      ],
      "start": 0,
      "end": 25
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 35,
        "end": 36
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 49,
            "end": 50
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
                    "start": 64,
                    "end": 65
                  },
                  "init": null,
                  "definite": false,
                  "start": 64,
                  "end": 65
                }
              ],
              "declare": false,
              "start": 60,
              "end": 66
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 79,
                  "end": 80
                },
                "start": 75,
                "end": 80
              },
              "directive": null,
              "start": 75,
              "end": 81
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 90,
              "end": 96
            }
          ],
          "start": 44,
          "end": 96
        }
      ],
      "start": 27,
      "end": 98
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 98
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 44,
    "end": 48
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  }
]
```

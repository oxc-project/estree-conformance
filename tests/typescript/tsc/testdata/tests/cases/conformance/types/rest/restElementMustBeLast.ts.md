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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 9
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 5,
                "end": 9
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 11,
                "end": 12
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 17,
                "end": 18
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 20,
                "end": 21
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 23,
                "end": 24
              }
            ],
            "start": 16,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 69
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 65,
              "end": 69
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 73
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 77,
              "end": 78
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 80,
              "end": 81
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 83,
              "end": 84
            }
          ],
          "start": 76,
          "end": 85
        },
        "start": 64,
        "end": 85
      },
      "directive": null,
      "start": 64,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 127
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
    "type": "Punctuator",
    "value": "[",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 65,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  }
]
```

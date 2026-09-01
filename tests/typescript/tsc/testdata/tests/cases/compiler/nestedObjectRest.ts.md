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
            "start": 60,
            "end": 61
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 61
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 64
        }
      ],
      "declare": false,
      "start": 56,
      "end": 65
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 74
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 70,
                  "end": 74
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 76
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 77
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "abc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 86
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 88,
                    "end": 89
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 83,
                  "end": 89
                }
              ],
              "start": 81,
              "end": 91
            }
          ],
          "start": 80,
          "end": 92
        },
        "start": 67,
        "end": 92
      },
      "directive": null,
      "start": 67,
      "end": 93
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 106
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 102,
                "end": 106
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 108
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 109
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "abc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 120
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 122,
                      "end": 123
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 117,
                    "end": 123
                  }
                ],
                "start": 115,
                "end": 125
              }
            ],
            "start": 114,
            "end": 126
          }
        ],
        "start": 113,
        "end": 127
      },
      "body": {
        "type": "EmptyStatement",
        "start": 129,
        "end": 130
      },
      "start": 94,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 130
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "[",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  }
]
```

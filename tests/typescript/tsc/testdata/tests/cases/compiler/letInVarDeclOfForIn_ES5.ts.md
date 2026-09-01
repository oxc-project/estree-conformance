__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "let",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
            },
            "init": null,
            "definite": false,
            "start": 35,
            "end": 38
          }
        ],
        "declare": false,
        "start": 31,
        "end": 38
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 43,
            "end": 44
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 45,
            "end": 46
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 47,
            "end": 48
          }
        ],
        "start": 42,
        "end": 49
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 51,
        "end": 53
      },
      "start": 26,
      "end": 53
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ForInStatement",
          "left": {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "let",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 70
                },
                "init": null,
                "definite": false,
                "start": 67,
                "end": 70
              }
            ],
            "declare": false,
            "start": 63,
            "end": 70
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 75,
                "end": 76
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 77,
                "end": 78
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 79,
                "end": 80
              }
            ],
            "start": 74,
            "end": 81
          },
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 83,
            "end": 85
          },
          "start": 58,
          "end": 85
        }
      ],
      "start": 55,
      "end": 87
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 87
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 35,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 67,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "3",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  }
]
```

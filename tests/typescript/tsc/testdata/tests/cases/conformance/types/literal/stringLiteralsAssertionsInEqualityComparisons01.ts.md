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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 8,
              "end": 13
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 18,
                "end": 23
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 18,
              "end": 33
            },
            "start": 8,
            "end": 33
          },
          "definite": false,
          "start": 4,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 43,
              "end": 48
            },
            "operator": "!==",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 54,
                "end": 59
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              },
              "start": 54,
              "end": 69
            },
            "start": 43,
            "end": 70
          },
          "definite": false,
          "start": 39,
          "end": 70
        }
      ],
      "declare": false,
      "start": 35,
      "end": 71
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 80,
              "end": 85
            },
            "operator": "==",
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              },
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 95,
                "end": 100
              },
              "start": 90,
              "end": 100
            },
            "start": 80,
            "end": 101
          },
          "definite": false,
          "start": 76,
          "end": 101
        }
      ],
      "declare": false,
      "start": 72,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
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
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 8,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 14,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 18,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 24,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "String",
    "value": "\"foo\"",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  }
]
```

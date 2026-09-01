__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 4,
        "end": 7
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "ex1",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 17
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ex1",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 32
              },
              "start": 23,
              "end": 33
            }
          ],
          "start": 19,
          "end": 35
        },
        "start": 8,
        "end": 35
      },
      "finalizer": null,
      "start": 0,
      "end": 35
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 41,
        "end": 44
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "ex1",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 54
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 56,
          "end": 59
        },
        "start": 45,
        "end": 59
      },
      "finalizer": null,
      "start": 37,
      "end": 59
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 85,
        "end": 88
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "ex1",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 98
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 100,
          "end": 103
        },
        "start": 89,
        "end": 103
      },
      "finalizer": null,
      "start": 81,
      "end": 103
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ex1",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 136
          },
          "definite": false,
          "start": 129,
          "end": 136
        }
      ],
      "declare": false,
      "start": 125,
      "end": 137
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "try",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 8,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "ex1",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "ex1",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "ex1",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "ex1",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "ex1",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  }
]
```

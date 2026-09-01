__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 14
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 14
          }
        ],
        "declare": false,
        "start": 5,
        "end": 14
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "doesNotExist",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 30
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 32,
        "end": 35
      },
      "start": 0,
      "end": 35
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 51
            },
            "init": null,
            "definite": false,
            "start": 48,
            "end": 51
          }
        ],
        "declare": false,
        "start": 42,
        "end": 51
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 64
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 66,
        "end": 69
      },
      "start": 37,
      "end": 69
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 85
            },
            "init": null,
            "definite": false,
            "start": 82,
            "end": 85
          }
        ],
        "declare": false,
        "start": 76,
        "end": 85
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 89,
        "end": 91
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 93,
        "end": 96
      },
      "start": 71,
      "end": 96
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [],
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 111
            },
            "init": null,
            "definite": false,
            "start": 109,
            "end": 111
          }
        ],
        "declare": false,
        "start": 103,
        "end": 111
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 115,
        "end": 117
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 119,
        "end": 122
      },
      "start": 98,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 122
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 15,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "doesNotExist",
    "start": 18,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 52,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 55,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Identifier",
    "value": "of",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  }
]
```

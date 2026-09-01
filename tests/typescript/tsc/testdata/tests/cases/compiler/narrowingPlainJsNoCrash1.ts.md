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
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 64
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 67,
            "end": 69
          },
          "definite": false,
          "start": 61,
          "end": 69
        }
      ],
      "declare": false,
      "start": 57,
      "end": 70
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
            "start": 75,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 75,
          "end": 76
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 78,
          "end": 79
        }
      ],
      "declare": false,
      "start": 71,
      "end": 80
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a$b",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 88
        },
        "start": 81,
        "end": 88
      },
      "directive": null,
      "start": 81,
      "end": 89
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 98
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a$b",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 106
        },
        "start": 97,
        "end": 106
      },
      "body": {
        "type": "EmptyStatement",
        "start": 107,
        "end": 108
      },
      "start": 90,
      "end": 108
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 124
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "start": 121,
          "end": 131
        },
        "start": 117,
        "end": 131
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 134,
          "end": 137
        },
        "directive": null,
        "start": 134,
        "end": 138
      },
      "start": 109,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 138
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "a$b",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "var",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Identifier",
    "value": "d",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "a$b",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "a$b",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "a$b",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 125,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "a$b",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  }
                ],
                "start": 7,
                "end": 32
              },
              "start": 5,
              "end": 32
            },
            "start": 4,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              },
              "start": 42,
              "end": 51
            },
            "start": 38,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 38,
          "end": 51
        }
      ],
      "declare": false,
      "start": 34,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 58
        },
        "consequent": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "right": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 65,
            "end": 67
          },
          "start": 61,
          "end": 67
        },
        "alternate": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 74,
            "end": 75
          },
          "start": 70,
          "end": 75
        },
        "start": 54,
        "end": 75
      },
      "directive": null,
      "start": 54,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
      },
      "directive": null,
      "start": 77,
      "end": 79
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
    "type": "Keyword",
    "value": "let",
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
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 34,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 44,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  }
]
```

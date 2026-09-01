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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "start": 15,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 24
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 41,
                "end": 42
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 42
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 34,
            "end": 42
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 48
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 51,
                "end": 53
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 44,
            "end": 53
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 54
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 58,
        "end": 60
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "directive": null,
            "start": 68,
            "end": 70
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "directive": null,
            "start": 75,
            "end": 77
          }
        ],
        "start": 62,
        "end": 79
      },
      "start": 27,
      "end": 79
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 79
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
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 51,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "b",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  }
]
```

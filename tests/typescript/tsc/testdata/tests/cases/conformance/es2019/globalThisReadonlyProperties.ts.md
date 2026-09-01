__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 10
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 21
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 21
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 24,
            "end": 25
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 29,
            "end": 32
          },
          "start": 24,
          "end": 32
        },
        "start": 0,
        "end": 32
      },
      "directive": null,
      "start": 0,
      "end": 32
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
            "start": 53,
            "end": 54
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 57,
            "end": 58
          },
          "definite": false,
          "start": 53,
          "end": 58
        }
      ],
      "declare": false,
      "start": 49,
      "end": 58
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 69,
            "end": 70
          },
          "definite": false,
          "start": 65,
          "end": 70
        }
      ],
      "declare": false,
      "start": 59,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 81
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "optional": false,
          "computed": false,
          "start": 71,
          "end": 83
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 86,
          "end": 87
        },
        "start": 71,
        "end": 87
      },
      "directive": null,
      "start": 71,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 98
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "optional": false,
          "computed": false,
          "start": 88,
          "end": 100
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 103,
          "end": 104
        },
        "start": 88,
        "end": 104
      },
      "directive": null,
      "start": 88,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 0,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 11,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 26,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 29,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 49,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 59,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 71,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 88,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 103,
    "end": 104
  }
]
```

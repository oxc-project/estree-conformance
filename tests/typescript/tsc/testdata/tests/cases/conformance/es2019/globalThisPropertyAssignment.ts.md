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
            "type": "ThisExpression",
            "start": 0,
            "end": 4
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 5,
            "end": 6
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 6
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 9,
          "end": 10
        },
        "start": 0,
        "end": 10
      },
      "directive": null,
      "start": 0,
      "end": 10
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 19,
            "end": 20
          },
          "definite": false,
          "start": 15,
          "end": 20
        }
      ],
      "declare": false,
      "start": 11,
      "end": 20
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
            "name": "window",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 48
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "optional": false,
          "computed": false,
          "start": 42,
          "end": 50
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 53,
          "end": 54
        },
        "start": 42,
        "end": 54
      },
      "directive": null,
      "start": 42,
      "end": 54
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
            "start": 119,
            "end": 129
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "alpha",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 135
          },
          "optional": false,
          "computed": false,
          "start": 119,
          "end": 135
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 138,
          "end": 139
        },
        "start": 119,
        "end": 139
      },
      "directive": null,
      "start": 119,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "this",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 119,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "alpha",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 138,
    "end": 139
  }
]
```

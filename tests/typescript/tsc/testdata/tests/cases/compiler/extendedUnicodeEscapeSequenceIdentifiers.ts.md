__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 17,
            "end": 19
          },
          "definite": false,
          "start": 6,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
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
            "name": "aa",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 39,
            "end": 41
          },
          "definite": false,
          "start": 27,
          "end": 41
        }
      ],
      "declare": false,
      "start": 21,
      "end": 42
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
            "name": "abde",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 64
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 67,
            "end": 69
          },
          "definite": false,
          "start": 49,
          "end": 69
        }
      ],
      "declare": false,
      "start": 43,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 79
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 83
          },
          "optional": false,
          "computed": false,
          "start": 72,
          "end": 83
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "aa",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 90
              },
              "start": 84,
              "end": 90
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcde",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 98
            },
            "start": 84,
            "end": 98
          }
        ],
        "optional": false,
        "start": 72,
        "end": 99
      },
      "directive": null,
      "start": 72,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 100
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "\\u{0061}",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "a\\u{0061}",
    "start": 27,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "a\\u{62}c\\u{64}e",
    "start": 49,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 67,
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
    "value": "console",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "abcde",
    "start": 93,
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
    "value": ";",
    "start": 99,
    "end": 100
  }
]
```

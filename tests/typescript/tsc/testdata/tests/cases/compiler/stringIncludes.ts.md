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
            "name": "includes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 14,
                "end": 21
              },
              "start": 12,
              "end": 21
            },
            "start": 4,
            "end": 21
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "includes",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 31
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": "abcde",
              "raw": "\"abcde\"",
              "start": 34,
              "end": 41
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "includes",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 50
            },
            "optional": false,
            "computed": false,
            "start": 34,
            "end": 50
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "cd",
              "raw": "\"cd\"",
              "start": 51,
              "end": 55
            }
          ],
          "optional": false,
          "start": 34,
          "end": 56
        },
        "start": 23,
        "end": 56
      },
      "directive": null,
      "start": 23,
      "end": 57
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "includes",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 66
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": "abcde",
              "raw": "\"abcde\"",
              "start": 69,
              "end": 76
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "includes",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 85
            },
            "optional": false,
            "computed": false,
            "start": 69,
            "end": 85
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "cd",
              "raw": "\"cd\"",
              "start": 86,
              "end": 90
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 92,
              "end": 93
            }
          ],
          "optional": false,
          "start": 69,
          "end": 94
        },
        "start": 58,
        "end": 94
      },
      "directive": null,
      "start": 58,
      "end": 95
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 95
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
    "value": "includes",
    "start": 4,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 23,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"abcde\"",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 42,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "\"cd\"",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 58,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"abcde\"",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 77,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"cd\"",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  }
]
```

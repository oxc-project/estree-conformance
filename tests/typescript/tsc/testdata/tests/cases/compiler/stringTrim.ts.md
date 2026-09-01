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
            "name": "trimmed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 13,
                "end": 19
              },
              "start": 11,
              "end": 19
            },
            "start": 4,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 28
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": "abcde",
              "raw": "\"abcde\"",
              "start": 31,
              "end": 38
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "trimEnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 46
            },
            "optional": false,
            "computed": false,
            "start": 31,
            "end": 46
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 31,
          "end": 48
        },
        "start": 21,
        "end": 48
      },
      "directive": null,
      "start": 21,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 57
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": "abcde",
              "raw": "\"abcde\"",
              "start": 60,
              "end": 67
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "trimStart",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 77
            },
            "optional": false,
            "computed": false,
            "start": 60,
            "end": 77
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 60,
          "end": 79
        },
        "start": 50,
        "end": 79
      },
      "directive": null,
      "start": 50,
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
          "name": "trimmed",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 88
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": "abcde",
              "raw": "\"abcde\"",
              "start": 91,
              "end": 98
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "trimLeft",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 107
            },
            "optional": false,
            "computed": false,
            "start": 91,
            "end": 107
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 91,
          "end": 109
        },
        "start": 81,
        "end": 109
      },
      "directive": null,
      "start": 81,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 118
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": "abcde",
              "raw": "\"abcde\"",
              "start": 121,
              "end": 128
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "trimRight",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 138
            },
            "optional": false,
            "computed": false,
            "start": 121,
            "end": 138
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 121,
          "end": 140
        },
        "start": 111,
        "end": 140
      },
      "directive": null,
      "start": 111,
      "end": 141
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 141
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
    "value": "trimmed",
    "start": 4,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "trimmed",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"abcde\"",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "trimEnd",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "trimmed",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"abcde\"",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "trimStart",
    "start": 68,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "trimmed",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "\"abcde\"",
    "start": 91,
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
    "value": "trimLeft",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "trimmed",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "String",
    "value": "\"abcde\"",
    "start": 121,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "trimRight",
    "start": 129,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  }
]
```

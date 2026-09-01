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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 14
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 31
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 40
          },
          "optional": false,
          "computed": false,
          "start": 25,
          "end": 40
        },
        "prefix": true,
        "start": 18,
        "end": 40
      },
      "directive": null,
      "start": 18,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 53
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toPrimitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 65
          },
          "optional": false,
          "computed": false,
          "start": 47,
          "end": 65
        },
        "prefix": true,
        "start": 42,
        "end": 65
      },
      "directive": null,
      "start": 42,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toStringTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 92
          },
          "optional": false,
          "computed": false,
          "start": 74,
          "end": 92
        },
        "prefix": true,
        "start": 67,
        "end": 92
      },
      "directive": null,
      "start": 67,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 97
        },
        "start": 94,
        "end": 97
      },
      "directive": null,
      "start": 94,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 102
        },
        "start": 99,
        "end": 102
      },
      "directive": null,
      "start": 99,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 112
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 106,
          "end": 114
        },
        "prefix": true,
        "start": 104,
        "end": 114
      },
      "directive": null,
      "start": 104,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 124
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 118,
          "end": 126
        },
        "prefix": true,
        "start": 116,
        "end": 126
      },
      "directive": null,
      "start": 116,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 136
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 130,
          "end": 138
        },
        "prefix": true,
        "start": 128,
        "end": 138
      },
      "directive": null,
      "start": 128,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 148
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 142,
          "end": 150
        },
        "prefix": true,
        "start": 140,
        "end": 150
      },
      "directive": null,
      "start": 140,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 161
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 155,
            "end": 163
          },
          "operator": "||",
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 167,
            "end": 168
          },
          "start": 155,
          "end": 168
        },
        "prefix": true,
        "start": 153,
        "end": 169
      },
      "directive": null,
      "start": 153,
      "end": 170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
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
    "value": "s",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 18,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 32,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 42,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "toPrimitive",
    "start": 54,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 81,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 94,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 99,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 164,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  }
]
```

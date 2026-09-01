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
            "name": "count",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 12,
            "end": 13
          },
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 22
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 25,
            "end": 27
          },
          "definite": false,
          "start": 19,
          "end": 27
        }
      ],
      "declare": false,
      "start": 15,
      "end": 28
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "incr",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 42
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 65
              },
              "start": 58,
              "end": 65
            },
            "start": 51,
            "end": 66
          }
        ],
        "start": 45,
        "end": 68
      },
      "expression": false,
      "start": 29,
      "end": 68
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
            "name": "oobj",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 80
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 92
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 92
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 89,
                "end": 92
              }
            ],
            "start": 83,
            "end": 94
          },
          "definite": false,
          "start": 76,
          "end": 94
        }
      ],
      "declare": false,
      "start": 70,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 99
          },
          "property": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incr",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 104
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 100,
            "end": 106
          },
          "optional": false,
          "computed": true,
          "start": 96,
          "end": 107
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "incr",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 116
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 112,
          "end": 118
        },
        "start": 96,
        "end": 118
      },
      "directive": null,
      "start": 96,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "oobj",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 124
            },
            "property": {
              "type": "Literal",
              "value": "obj",
              "raw": "\"obj\"",
              "start": 125,
              "end": 130
            },
            "optional": false,
            "computed": true,
            "start": 120,
            "end": 131
          },
          "property": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incr",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 136
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 132,
            "end": 138
          },
          "optional": false,
          "computed": true,
          "start": 120,
          "end": 139
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "incr",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 148
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 144,
          "end": 150
        },
        "start": 120,
        "end": 150
      },
      "directive": null,
      "start": 120,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 151
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
    "value": "count",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 15,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 29,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "incr",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 58,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "oobj",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "incr",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "incr",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "oobj",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "String",
    "value": "\"obj\"",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "incr",
    "start": 132,
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
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "incr",
    "start": 144,
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
  }
]
```

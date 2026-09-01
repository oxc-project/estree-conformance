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
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 35
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 44
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 38,
            "end": 46
          },
          "definite": false,
          "start": 31,
          "end": 46
        }
      ],
      "declare": false,
      "start": 25,
      "end": 47
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
            "name": "_str",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 58
          },
          "init": {
            "type": "Literal",
            "value": "my-fake-sym",
            "raw": "\"my-fake-sym\"",
            "start": 61,
            "end": 74
          },
          "definite": false,
          "start": 54,
          "end": 74
        }
      ],
      "declare": false,
      "start": 48,
      "end": 75
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 91
            },
            "optional": false,
            "computed": false,
            "start": 77,
            "end": 91
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 96
          },
          "optional": false,
          "computed": true,
          "start": 77,
          "end": 97
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "\"ok\"",
          "start": 100,
          "end": 104
        },
        "start": 77,
        "end": 104
      },
      "directive": null,
      "start": 77,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 112
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 120
            },
            "optional": false,
            "computed": false,
            "start": 106,
            "end": 120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 125
          },
          "optional": false,
          "computed": true,
          "start": 106,
          "end": 126
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "\"ok\"",
          "start": 129,
          "end": 133
        },
        "start": 106,
        "end": 133
      },
      "directive": null,
      "start": 106,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 141
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 149
            },
            "optional": false,
            "computed": false,
            "start": 135,
            "end": 149
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "optional": false,
          "computed": false,
          "start": 135,
          "end": 151
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "_sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 158
        },
        "start": 135,
        "end": 158
      },
      "directive": null,
      "start": 135,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 25,
  "end": 159
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "_str",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "String",
    "value": "\"my-fake-sym\"",
    "start": 61,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 84,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "_str",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  }
]
```
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./lateBoundAssignmentDeclarationSupport2.js",
                "raw": "\"./lateBoundAssignmentDeclarationSupport2.js\"",
                "start": 18,
                "end": 63
              }
            ],
            "optional": false,
            "start": 10,
            "end": 64
          },
          "definite": false,
          "start": 6,
          "end": 64
        }
      ],
      "declare": false,
      "start": 0,
      "end": 65
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
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "property": {
              "type": "Literal",
              "value": "my-fake-sym",
              "raw": "\"my-fake-sym\"",
              "start": 78,
              "end": 91
            },
            "optional": false,
            "computed": true,
            "start": 76,
            "end": 92
          },
          "definite": false,
          "start": 72,
          "end": 92
        }
      ],
      "declare": false,
      "start": 66,
      "end": 93
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "optional": false,
              "computed": false,
              "start": 106,
              "end": 109
            },
            "optional": false,
            "computed": true,
            "start": 104,
            "end": 110
          },
          "definite": false,
          "start": 100,
          "end": 110
        }
      ],
      "declare": false,
      "start": 94,
      "end": 111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 111
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
    "value": "x",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"./lateBoundAssignmentDeclarationSupport2.js\"",
    "start": 18,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 66,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "String",
    "value": "\"my-fake-sym\"",
    "start": 78,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  }
]
```

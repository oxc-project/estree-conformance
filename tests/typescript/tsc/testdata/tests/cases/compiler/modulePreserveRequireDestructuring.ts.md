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
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 0,
              "end": 6
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 7,
              "end": 14
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 14
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readFile",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 23
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 23
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 38,
            "end": 40
          },
          "expression": false,
          "start": 26,
          "end": 40
        },
        "start": 0,
        "end": 40
      },
      "directive": null,
      "start": 0,
      "end": 41
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 15,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 26,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 88
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 88
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 80,
                "end": 88
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 90
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 100
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./dep.cjs",
                "raw": "\"./dep.cjs\"",
                "start": 101,
                "end": 112
              }
            ],
            "optional": false,
            "start": 93,
            "end": 113
          },
          "definite": false,
          "start": 78,
          "end": 113
        }
      ],
      "declare": false,
      "start": 72,
      "end": 114
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
            "name": "dep",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 124
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 134
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./dep.cjs",
                "raw": "\"./dep.cjs\"",
                "start": 135,
                "end": 146
              }
            ],
            "optional": false,
            "start": 127,
            "end": 147
          },
          "definite": false,
          "start": 121,
          "end": 147
        }
      ],
      "declare": false,
      "start": 115,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "readFile",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 157
      },
      "directive": null,
      "start": 149,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "dep",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 162
      },
      "directive": null,
      "start": 159,
      "end": 163
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 72,
  "end": 164
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 80,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "\"./dep.cjs\"",
    "start": 101,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 115,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "dep",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"./dep.cjs\"",
    "start": 135,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 149,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "dep",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "readFile",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 82
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromEsm",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 93
          },
          "importKind": "value",
          "start": 74,
          "end": 93
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./dep.cjs",
        "raw": "\"./dep.cjs\"",
        "start": 101,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 65,
      "end": 113
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "fromEsm",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 121
      },
      "directive": null,
      "start": 114,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 65,
  "end": 122
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 74,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 83,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "fromEsm",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 96,
    "end": 100
  },
  {
    "type": "String",
    "value": "\"./dep.cjs\"",
    "start": 101,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "fromEsm",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  }
]
```

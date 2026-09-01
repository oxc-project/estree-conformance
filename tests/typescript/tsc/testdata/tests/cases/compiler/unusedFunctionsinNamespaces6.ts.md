__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "function1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 40
                },
                "init": {
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
                    "start": 54,
                    "end": 61
                  },
                  "expression": false,
                  "start": 43,
                  "end": 61
                },
                "definite": false,
                "start": 31,
                "end": 61
              }
            ],
            "declare": false,
            "start": 27,
            "end": 61
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "function2",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 92
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 95,
                "end": 103
              },
              "expression": false,
              "start": 74,
              "end": 103
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 67,
            "end": 103
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "function3",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 127
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "function1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 149
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 140,
                    "end": 151
                  },
                  "directive": null,
                  "start": 140,
                  "end": 152
                }
              ],
              "start": 130,
              "end": 158
            },
            "expression": false,
            "start": 109,
            "end": 158
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "function4",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 182
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 185,
              "end": 193
            },
            "expression": false,
            "start": 164,
            "end": 193
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "function3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 223
                  },
                  "definite": false,
                  "start": 210,
                  "end": 223
                }
              ],
              "declare": false,
              "start": 206,
              "end": 224
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 199,
            "end": 224
          }
        ],
        "start": 21,
        "end": 226
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Validation",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "function1",
    "start": 31,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 74,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "function2",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 109,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "function3",
    "start": 118,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "function1",
    "start": 140,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 164,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "function4",
    "start": 173,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 199,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "function3",
    "start": 214,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  }
]
```
